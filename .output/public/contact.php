<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
    exit;
}

$raw   = file_get_contents('php://input');
$input = json_decode($raw, true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request body.']);
    exit;
}

// ── Raw values (used in plain-text fallback) ─────────────────────────────────
$name_raw    = trim($input['name']    ?? '');
$company_raw = trim($input['company'] ?? '');
$email_raw   = filter_var(trim($input['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone_raw   = trim($input['phone']   ?? '');
$scope_raw   = trim($input['scope']   ?? '');
$message_raw = trim($input['message'] ?? '');

if (!$name_raw || !$email_raw || !$message_raw) {
    http_response_code(400);
    echo json_encode(['error' => 'Name, email and message are required.']);
    exit;
}

// ── HTML-safe values (used in HTML body) ─────────────────────────────────────
$name    = htmlspecialchars($name_raw,    ENT_QUOTES, 'UTF-8');
$company = htmlspecialchars($company_raw, ENT_QUOTES, 'UTF-8');
$email   = htmlspecialchars($email_raw,   ENT_QUOTES, 'UTF-8');
$phone   = htmlspecialchars($phone_raw,   ENT_QUOTES, 'UTF-8');
$scope   = htmlspecialchars($scope_raw,   ENT_QUOTES, 'UTF-8');
$message_html = nl2br(htmlspecialchars($message_raw, ENT_QUOTES, 'UTF-8'));

// ── Helpers ───────────────────────────────────────────────────────────────────
function detail_row(string $label, string $value, bool $alt = false): string {
    $bg = $alt ? '#f3f6fb' : '#ffffff';
    return "
      <tr>
        <td width=\"160\" valign=\"top\"
            style=\"padding:14px 20px;background-color:{$bg};border-bottom:1px solid #e8e2d6;
                    font-family:Inter,'Helvetica Neue',Arial,sans-serif;
                    font-size:11px;font-weight:700;letter-spacing:0.07em;
                    text-transform:uppercase;color:#7387A8;\">
          {$label}
        </td>
        <td valign=\"top\"
            style=\"padding:14px 20px;background-color:{$bg};border-bottom:1px solid #e8e2d6;
                    font-family:Inter,'Helvetica Neue',Arial,sans-serif;
                    font-size:14px;color:#20262f;line-height:1.5;\">
          {$value}
        </td>
      </tr>";
}

// ── Plain-text fallback ───────────────────────────────────────────────────────
$text_body  = "NEW WEBSITE ENQUIRY — OPTIMA GLOBAL ENERGY SERVICES\n";
$text_body .= str_repeat('=', 56) . "\n\n";
$text_body .= "Name:    {$name_raw}\n";
$text_body .= "Email:   {$email_raw}\n";
if ($phone_raw)   $text_body .= "Phone:   {$phone_raw}\n";
if ($company_raw) $text_body .= "Company: {$company_raw}\n";
if ($scope_raw)   $text_body .= "Scope:   {$scope_raw}\n";
$text_body .= "\nMessage\n" . str_repeat('-', 40) . "\n{$message_raw}\n\n";
$text_body .= str_repeat('=', 56) . "\n";
$text_body .= "Sent via ogesenergy.com/contact\n";
$text_body .= "Reply directly to this email to respond to the sender.\n";

// ── Build detail rows ─────────────────────────────────────────────────────────
$rows  = detail_row('Full Name', $name, false);
$rows .= detail_row('Email',     "<a href=\"mailto:{$email}\" style=\"color:#1d6fd6;text-decoration:none;\">{$email}</a>", true);
if ($phone)   $rows .= detail_row('Phone',   $phone,   false);
if ($company) $rows .= detail_row('Company', $company, $phone ? true : false);
if ($scope)   $rows .= detail_row('Scope',   "<span style=\"display:inline-block;background-color:#eaf2fd;color:#1d6fd6;font-size:12px;font-weight:600;padding:3px 10px;border-radius:20px;\">{$scope}</span>", true);

// ── HTML email body ───────────────────────────────────────────────────────────
$html_body = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>New Website Enquiry — Optima Global Energy Services</title>
</head>
<body style="margin:0;padding:0;background-color:#ede8e0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">

<!--[if mso]><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td><![endif]-->

<!-- Outer wrapper -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"
       style="background-color:#ede8e0;width:100%;">
  <tr>
    <td align="center" style="padding:40px 16px 48px;">

      <!-- ── Card ───────────────────────────────────────────────────────────── -->
      <table role="presentation" width="600" cellpadding="0" cellspacing="0"
             style="max-width:600px;width:100%;border-radius:14px;
                    overflow:hidden;box-shadow:0 4px 24px rgba(15,42,82,0.13);">

        <!-- ── Header ─────────────────────────────────────────────────────── -->
        <tr>
          <td style="background-color:#0b1d3b;padding:36px 40px 30px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td valign="middle">
                  <!-- Wordmark -->
                  <p style="margin:0;font-family:Georgia,'Times New Roman',serif;
                             font-size:19px;font-weight:600;color:#ffffff;
                             letter-spacing:-0.01em;line-height:1.2;">
                    Optima Global Energy Services
                  </p>
                  <p style="margin:6px 0 0;font-family:Inter,'Helvetica Neue',Arial,sans-serif;
                             font-size:11px;font-weight:700;letter-spacing:0.1em;
                             text-transform:uppercase;color:#7387A8;">
                    New Website Enquiry
                  </p>
                </td>
                <td valign="middle" align="right" width="48">
                  <!-- Amber derrick icon (simplified circle) -->
                  <table role="presentation" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="width:40px;height:40px;border-radius:50%;
                                 background-color:#c97a2e;text-align:center;
                                 vertical-align:middle;">
                        <!-- Derrick silhouette using text character -->
                        <span style="font-family:Georgia,serif;font-size:20px;
                                     font-weight:700;color:#ffffff;line-height:40px;">▲</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Amber accent bar -->
        <tr>
          <td height="4" style="background-color:#c97a2e;font-size:0;line-height:0;">&nbsp;</td>
        </tr>

        <!-- ── Intro banner ────────────────────────────────────────────────── -->
        <tr>
          <td style="background-color:#ffffff;padding:32px 40px 20px;">
            <p style="margin:0;font-family:Inter,'Helvetica Neue',Arial,sans-serif;
                       font-size:15px;color:#5b6472;line-height:1.65;">
              A new enquiry has been submitted via the contact form at
              <a href="https://www.ogesenergy.com/contact"
                 style="color:#1d6fd6;text-decoration:none;font-weight:600;">
                ogesenergy.com
              </a>.
              The sender's details are below — reply directly to this email to respond.
            </p>
          </td>
        </tr>

        <!-- ── Sender details card ─────────────────────────────────────────── -->
        <tr>
          <td style="background-color:#ffffff;padding:0 40px 28px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                   style="border-radius:10px;border:1px solid #e0e8f4;overflow:hidden;">
              <!-- Card header -->
              <tr>
                <td colspan="2"
                    style="background-color:#0b1d3b;padding:12px 20px;
                           font-family:Inter,'Helvetica Neue',Arial,sans-serif;
                           font-size:10px;font-weight:700;letter-spacing:0.1em;
                           text-transform:uppercase;color:#7387A8;">
                  Sender Details
                </td>
              </tr>
              {$rows}
            </table>
          </td>
        </tr>

        <!-- ── Message ────────────────────────────────────────────────────── -->
        <tr>
          <td style="background-color:#ffffff;padding:0 40px 40px;">
            <p style="margin:0 0 12px;font-family:Inter,'Helvetica Neue',Arial,sans-serif;
                       font-size:10px;font-weight:700;letter-spacing:0.1em;
                       text-transform:uppercase;color:#0b1d3b;">
              Message
            </p>
            <!-- Message box with amber left border -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                   style="border-radius:0 10px 10px 0;overflow:hidden;">
              <tr>
                <!-- Amber bar -->
                <td width="4" style="background-color:#c97a2e;border-radius:4px 0 0 4px;">&nbsp;</td>
                <!-- Message text -->
                <td style="background-color:#f9f7f3;padding:20px 24px;
                           font-family:Inter,'Helvetica Neue',Arial,sans-serif;
                           font-size:15px;color:#20262f;line-height:1.75;
                           border:1px solid #e8e2d6;border-left:none;border-radius:0 10px 10px 0;">
                  {$message_html}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ── Footer ─────────────────────────────────────────────────────── -->
        <tr>
          <td style="background-color:#f3f6fb;border-top:1px solid #e0e8f4;padding:24px 40px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0;font-family:Inter,'Helvetica Neue',Arial,sans-serif;
                             font-size:12px;color:#8a93a3;line-height:1.6;">
                    This message was sent automatically from the contact form at
                    <a href="https://www.ogesenergy.com/contact"
                       style="color:#1d6fd6;text-decoration:none;">
                      ogesenergy.com/contact
                    </a>.
                    To reply, simply hit <strong style="color:#5b6472;">Reply</strong> —
                    your response will go directly to the sender.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Navy bottom bar -->
        <tr>
          <td style="background-color:#0b1d3b;padding:16px 40px;">
            <p style="margin:0;font-family:Inter,'Helvetica Neue',Arial,sans-serif;
                       font-size:11px;color:#4a5f7e;text-align:center;">
              © Optima Global Energy Services Limited &nbsp;·&nbsp;
              Plot 146, Trans-Amadi Industrial Layout, Port Harcourt, Nigeria
            </p>
          </td>
        </tr>

      </table>
      <!-- /Card -->

    </td>
  </tr>
</table>

<!--[if mso]></td></tr></table><![endif]-->

</body>
</html>
HTML;

// ── Assemble multipart email ──────────────────────────────────────────────────
$to       = 'info@ogesenergy.com';
$subject  = "Website enquiry from {$name_raw}" . ($company_raw ? " — {$company_raw}" : '');
$boundary = '----=_Part_' . md5(uniqid(rand(), true));

$headers  = "From: Optima Website <noreply@ogesenergy.com>\r\n";
$headers .= "Reply-To: {$name_raw} <{$email_raw}>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/alternative; boundary=\"{$boundary}\"\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "X-Priority: 3\r\n";

$body  = "--{$boundary}\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: quoted-printable\r\n\r\n";
$body .= quoted_printable_encode($text_body) . "\r\n\r\n";
$body .= "--{$boundary}\r\n";
$body .= "Content-Type: text/html; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: quoted-printable\r\n\r\n";
$body .= quoted_printable_encode($html_body) . "\r\n\r\n";
$body .= "--{$boundary}--";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email. Please try again or contact us directly at info@ogesenergy.com.']);
}
