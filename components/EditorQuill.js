"use client";

import { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css"; // CSS tema

export default function EditorQuill({ nilai, onChange, className }) {
    const wrapperRef = useRef(null);
    const quillRef = useRef(null);

    useEffect(() => {
        let mounted = true;

        async function initQuill() {
            // import quill hanya di client
            const Quill = (await import("quill")).default;

            if (!mounted) return;

            quillRef.current = new Quill(wrapperRef.current, {
                theme: "snow",
                modules: {
                    toolbar: [
                        [{ header: [1, 2, false] }],
                        ["bold", "italic", "underline"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["link", "image"],
                        ["clean"],
                    ],
                },
            });

            // set value awal bila ada
            if (nilai) {
                quillRef.current.clipboard.dangerouslyPasteHTML(nilai);
            }

            // event change -> kirim HTML ke parent
            quillRef.current.on("text-change", () => {
                const html = quillRef.current.root.innerHTML;
                onChange && onChange(html);
            });
        }

        initQuill();

        return () => {
            mounted = false;
            // cleanup: destroy instance jika perlu
            if (quillRef.current) {
                quillRef.current.off && quillRef.current.off("text-change");
                quillRef.current = null;
            }
        };
    }, []); // jalankan sekali

    // jika parent mengubah `nilai` dari luar, sinkronkan editor
    useEffect(() => {
        if (quillRef.current) {
            const cur = quillRef.current.root.innerHTML;
            if (nilai !== cur) {
                quillRef.current.clipboard.dangerouslyPasteHTML(nilai || "");
            }
        }
    }, [nilai]);

    return (
        <div className={className}>
            {/* wrapperRef menunjuk ke node yang diubah Quill */}
            <div ref={wrapperRef} />
        </div>
    );
}
