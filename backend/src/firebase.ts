import admin from "firebase-admin";

// Initialize Firebase Admin SDK
const serviceAccount = {
  "type": "service_account",
  "project_id": "andmanhub",
  "private_key_id": "8686a5b5e4a55d580dd237ce08bbd85462f9784e",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDdsQqHjBr88aX2\n2Ee6mujitp0pdEFEnw6VU6bTDUgUvOPez5BoHBEWwATrfDlxNvYftA1uIOKjxyE0\nCtVxImvE+YeA3mFl0UZPd2LvoqDu28P5/6PiiGMWv9CpsQaviG+mrFf/jMYz5HJM\nhwHUu+bp7UrfAUeo8OqgelK9nyK9bD5rLBiyNtA+DezwXtkW26IbMAIrduVpbACC\n+gS9z0OtGG+Zhn+GIOXRkDh4OYbR7RFyo0RUybfhZWdvPwULshqkM7VkRwUvzSdz\n7mVCK4LnNPA0X0s4G8RSWOHQmzGV06XzLFD7MJ43WuluYbJrGKc1T5GyqgDCigcj\nx4E/s6eDAgMBAAECggEABde1IsZjS9DC6fP22wrTlpr28VUCO++3rOFnxf6zlcTN\nPekRvRStsct5cfRonZ5wK7j2sNMwDIQPqxrlouE6rbQkjQ4tcMdOQ7Bql+OsBqf/\njMte9FB37yH+fqCDqXI6sS/OPvfkyqdhNciVNq6y1oSPjvgmshD8UF7xZuNtKpPr\nL15FtUHePv/HcxcHbp8O94rn7s341X1/q1g4plaXDug38N9J263Ic1/4AUflxeLP\nTmBlP1ZtnMj0EO16wslqfZcJ6J9sDBcDP22KRG1vDgR/zMycJLY65DMk9QFUVFWG\nqSZUZn3W1mkNCOwZ2LFbqcmxy0PBr1+Qb0iz1/IRqQKBgQD74yzF9J3li+gECOCU\nXMA9Ou4jZsFzywGgFRKVxKmgl56DTJDp9cSZoZgOGJWaib6Crskgo5T4+y6JiVWn\n2rkAcf+9hwBAYQFd3/pfKKKPg+ycBAZxb2JBQOBMsffbcotZnjuG7m8LymRpXKgI\n1TDwiklsoVJCQIFoYOXmOKW2CwKBgQDhT6fEtc3/3wpx78C/uEcKFBzS+c0+FZoT\nBcojyuhAanajCa7eTb82d71jsSJtIaRfy+VJBFIUAB/+ahDV8ZfV8Q6/qp2tQc/L\nvp5elvPpx0XGcyquXrvhl7k3Zy2OIo3Vi5g1pGBat0v7MWbPF9I9Og+KP7NmzkIj\nm3mCIsMXaQKBgQCRAFsC7emDfgGnaPDXl3k3BliWWo3cua2K2Pak7txzTTT8ArSd\nalSt2B9vZemhV9Aq7LFtr52PoxFMLZn4kenT/swo77FOXklqIAjChOLn2Rr5STvo\nSyV1yQIWRJEZbBwaEAPWjiWw1Obu3F8DDq8omYLhHRD8gKO+UaGm4U9LtwKBgQCR\nTqfqKz4RmKzJ0k/C1XurOlFklwoQ0imtvvwgnUmv0Xl1qFcIs6dv30VbN+/15c52\noa7bqles4m+/ynPVJpw/s9lJLyXFiT4ULnlAk6X2zTdoxvltv1b4JLukyXwNwKcs\nY3zki4BAwRnVhITDZp+GMR24kWCIGtl40VpJ3VVokQKBgQC7xN4j9kNG6xEHmRsB\nade2w6hyOu8ii+T/sfYL8RqbSthP/4cMYJh9qN1+LpKuuh2RY8mso7CGSFp4E5ZW\nklhQHvHCXX/Yb92h7zyHAxpB4YZ+uJbYeUA5+2OY54p/jaeeGQXyXN2vgrLCt57a\n24NtODG9W02lKmyiNxEgcDxThw==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@andmanhub.iam.gserviceaccount.com",
  "client_id": "115544076545587751333",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40andmanhub.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}


if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

export default admin;
