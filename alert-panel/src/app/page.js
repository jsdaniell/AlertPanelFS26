'use client';
import LabelWithInput from "@/components/LabelWithInput/LabelWithInput";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import PillButton from "@/components/PillButton/PillButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <PageWrapper>
      <p className="text-4xl font-bold">Unicode</p>
      <div className="flex flex-col gap-2">
        <LabelWithInput label="Email" />
        <LabelWithInput label="Senha" />
      </div>
      <PillButton
        text="Entrar"
        onClick={() => router.push("/checklist")}
      />
    </PageWrapper>
  );
}
