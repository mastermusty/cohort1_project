import { Input } from "@mantine/core";
import Link from "next/link"

export default function Button() {
  return (
    <div className="bg-black text-[blue]">
      come homee babyyy
      <div className="">
        <Link href="/go">
        <p>come</p>
        <Input radius="md" placeholder="Input component" />
        </Link>
      </div>
    </div>
  );
}
