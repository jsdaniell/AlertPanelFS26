'use client'
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import PillButton from "@/components/PillButton/PillButton";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

export default function Success(){
    const router = useRouter();

    return (
      <PageWrapper>
        <p className="text-3xl text-center">CHECKLIST ENVIADO</p>
        <div className="flex justify-center">
          <CheckCircle
            color="white"
            size={100}
          />
        </div>
        <PillButton
          text="Voltar" 
          onClick={() => router.push("/")}
        />
      </PageWrapper>
    )
}