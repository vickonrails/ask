const questions = [
    {
        "id": "1",
        "text": "What is the primary function of Api2Pdf.com?",
        "answers": {
            "a": "To create REST APIs for websites.",
            "b": "To instantly generate PDF documents from various sources.",
            "c": "To generate API keys for web development.",
            "d": "To merge and concatenate HTML files."
        },
        "correctAnswer": "b"
    },
    {
        "id": "2",
        "text": "Which popular libraries does Api2Pdf act as a wrapper for?",
        "answers": {
            "a": "jQuery, React, and Angular.",
            "b": "Ruby on Rails, Django, and Flask.",
            "c": "wkhtmltopdf, Headless Chrome, and LibreOffice.",
            "d": "TensorFlow, PyTorch, and Keras."
        },
        "correctAnswer": "c"
    },
    {
        "id": "3",
        "text": "What additional feature does Api2Pdf support apart from generating PDFs?",
        "answers": {
            "a": "Cloud storage of PDF files.",
            "b": "Generating spreadsheets.",
            "c": "Translating text within documents.",
            "d": "Generating barcodes and QR codes."
        },
        "correctAnswer": "d"
    },
    {
        "id": "4",
        "text": "How can one acquire an API key for Api2Pdf?",
        "answers": {
            "a": "By making a phone call to Api2Pdf help center.",
            "b": "Creating an account at portal.api2pdf.com.",
            "c": "Sending an email to Api2Pdf support.",
            "d": "Purchasing it through an online marketplace."
        },
        "correctAnswer": "b"
    },
    {
        "id": "5",
        "text": "What is the primary method for testing the API as mentioned in the guide?",
        "answers": {
            "a": "Sending a POST request to Api2Pdf server.",
            "b": "Using the provided URL in a browser with your API key.",
            "c": "Downloading and running a desktop application.",
            "d": "Visiting the Api2Pdf website and using their online tester."
        },
        "correctAnswer": "b"
    },
    {
        "id": "6",
        "text": "Where can users find more information on Api2Pdf's other API calls and settings?",
        "answers": {
            "a": "REST API documentation.",
            "b": "In the welcome email upon signing up.",
            "c": "By contacting customer support.",
            "d": "In the API Quick Start Guide."
        },
        "correctAnswer": "a"
    },
    {
        "id": "7",
        "text": "What should users do if they have any questions or issues with Api2Pdf?",
        "answers": {
            "a": "Post a question on stackoverflow.",
            "b": "Wait for a system update.",
            "c": "Reach out to support@api2pdf.com.",
            "d": "Reset their API keys."
        },
        "correctAnswer": "c"
    }
]

// API for mocking requests so I don't go broke :(
export async function POST(request: Request) {
    return Response.json({ questions })
}