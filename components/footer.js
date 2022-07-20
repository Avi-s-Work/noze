import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer className="px-20 h-20 w-full bg-gray-100 grid grid-cols-3 items-center justify-items-between">
        <div className="social w-32 flex items-center justify-between">
          <Image src="/images/fb.svg" alt="facebook" width="24" height="24" />
          <Image
            src="/images/twitter.svg"
            alt="twitter"
            width="24"
            height="24"
          />
          <Image
            src="/images/instagram.svg"
            alt="instagram"
            width="24"
            height="24"
          />
        </div>
        <div className="year text-sm text-center">2021 NOZE</div>
        <div className="copyright text-xs font-semibold flex items-center justify-end gap-9">
          <a href="">Privacy Policy</a>
          <a href="">Terms of Use</a>
          <a href="">Contact</a>
        </div>
      </footer>
    </>
  );
}
