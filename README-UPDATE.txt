PORTFOLIO UPDATE

Changes in this version:
- Added a third animated floating label, "Code", around the hero portrait area. Existing labels "Security-minded" and "Builder" also float up and down.
- Added a Light/Dark theme toggle in the navigation bar. Dark mode is the default.
- Added C, Spring Boot, Hibernate, JPA, JWT and MVC to the Skills data.
- Removed Wanderlust and Protocol Explorer from the Projects data.
- Added an API Gateway project entry. Its description is intentionally framed as a project concept / planned capabilities because detailed implementation information was not supplied.
- Moved the CGPA / percentage score presentation to the top-right of each Education card and styled it orange.

To run:
1. Extract the ZIP.
2. Open the extracted folder in VS Code.
3. Run `npm install` in the terminal.
4. Run `npm run dev`.

The hero portrait remains the existing CK placeholder. Replace it with your own photo in the portrait-placeholder element in src/App.tsx when you have a photo ready.

CONTACT FORM EMAILJS SETUP

The contact form now sends messages directly from the website using EmailJS. It no longer opens the visitor's email application.

1. Create/sign in to an EmailJS account at https://www.emailjs.com/.
2. Add an Email Service and connect the inbox where you want to receive messages (chetankadadi07@gmail.com).
3. Create an Email Template. Add these template variables to the email:
   - {{from_name}}
   - {{from_email}}
   - {{reply_to}}
   - {{subject}}
   - {{message}}
   You can use {{to_name}} for the greeting. Set the template recipient to your own inbox.
4. Copy the EmailJS Service ID, Template ID and Public Key.
5. In the project root, make a copy of .env.example named .env.local. Replace the example values with your real Service ID, Template ID and Public Key.
6. Restart the local dev server after changing environment variables.
7. In Vercel, open Project Settings > Environment Variables and add these three variables for Production (and Preview if wanted):
   VITE_EMAILJS_SERVICE_ID
   VITE_EMAILJS_TEMPLATE_ID
   VITE_EMAILJS_PUBLIC_KEY
   Then redeploy the project.

Only use the EmailJS PUBLIC key in the VITE_ variable. Never put an EmailJS private key or secret in frontend code or Vercel VITE_ variables. Configure allowed website origins in EmailJS once the portfolio domain is live. Until the EmailJS values are configured, the form displays a message directing visitors to your email address.
