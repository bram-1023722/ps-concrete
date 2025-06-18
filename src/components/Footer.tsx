export default function Footer() {
    return (
        <footer className="bg-[#f4f1eb] text-center text-sm text-gray-700 py-8 mt-20">
            <h2 className="text-lg font-semibold tracking-widest uppercase mb-2">
                PS Concrete Finishing
            </h2>
            <p className="text-gray-600">
                &copy; {new Date().getFullYear()} PS Concrete Finishing. All rights reserved.
            </p>
            <p>Serving The Greenville Area • Call us: (123) 456-7890</p>
        </footer>
    );
}