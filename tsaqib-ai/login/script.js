document.getElementById("uploadForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const fileInput = document.getElementById("imageInput");
    const loading = document.getElementById("loading");
    const result = document.getElementById("result");
    const outputImage = document.getElementById("outputImage");

    if (!fileInput.files[0]) {
        alert("Silakan pilih gambar terlebih dahulu.");
        return;
    }

    loading.classList.remove("hidden");
    result.classList.add("hidden");

    const formData = new FormData();
    formData.append("image", fileInput.files[0]);

    try {
        const response = await fetch("https://api-inference.huggingface.co/models/hakurei/waifu-diffusion", {
            method: "POST",
            headers: {
                Authorization: "Bearer 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"
            },
            body: formData
        });

        if (!response.ok) throw new Error("Gagal memproses gambar");

        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);

        outputImage.src = imageUrl;
        result.classList.remove("hidden");
    } catch (error) {
        alert("Terjadi kesalahan saat mengedit gambar.");
        console.error(error);
    } finally {
        loading.classList.add("hidden");
    }
});