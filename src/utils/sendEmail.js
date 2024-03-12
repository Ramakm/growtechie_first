import emailjs from "@emailjs/browser";

export default async function sendEmail(form, template=import.meta.env.VITE_EMAILJS_TEMPLATE_ID) {
    return new Promise((resolve, reject) => {
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            template,
            form,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    });
}
