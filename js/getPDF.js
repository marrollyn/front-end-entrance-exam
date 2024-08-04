import html2pdf from "html2pdf.js";

export function getPDFResume() {
    const downloadButton = document.getElementById("download");
    if (downloadButton) {
        downloadButton.addEventListener("click", () => {
            const element = document.querySelector(".resume");

            // Опции для html2pdf
            const options = {
                margin: 0.5,
                filename: "resume.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
            };

            // Генерация PDF
            html2pdf().from(element).set(options).save();
        });
    } else {
        console.error("Не удается скачать файл, не найден id кнопки скачивания.");
    }
}
