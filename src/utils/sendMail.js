import emailjs from "@emailjs/browser";

export default async function sendMail(form, successAlertText) {
    // setSendingMail(true)
    // e.preventDefault();
    emailjs
        .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_BOOK_TRAIL_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
        .then(() => {
            // setFormData(initData);
            alert(successAlertText);
        },
        )
        .catch((err) => {
            throw Error(err)
        })
        .finally(() => {
            // setSendingMail(false)
            // navigate("/");
        })
}