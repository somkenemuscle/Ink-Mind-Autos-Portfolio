function WhatsAppButton() {
    const phoneNumber = "2349030761768";
    const message = "Hello, I'd like to make an inquiry.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#1ebe57] hover:scale-110 transition-all duration-300"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="white"
                className="w-7 h-7"
            >
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.744 3.047 9.379L1.054 31.49l6.328-2.032C10.027 31.079 12.89 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.335 22.594c-.39 1.1-1.932 2.013-3.17 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.826-6.81-8.064-7.124-.23-.314-1.904-2.534-1.904-4.834s1.204-3.43 1.632-3.898c.39-.428 1.03-.624 1.642-.624.198 0 .376.01.536.018.468.02.704.048 1.012.784.39.922 1.34 3.264 1.456 3.502.118.238.236.554.078.868-.15.322-.282.466-.52.738-.238.272-.464.48-.702.774-.218.256-.464.53-.196.998.268.468 1.192 1.964 2.56 3.182 1.76 1.566 3.244 2.052 3.712 2.278.468.226.742.19 1.014-.116.28-.314 1.194-1.39 1.514-1.868.312-.478.632-.394 1.062-.236.434.15 2.762 1.302 3.234 1.54.468.236.782.356.898.554.116.196.116 1.14-.274 2.24z" />
            </svg>
        </a>
    );
}

export default WhatsAppButton;
