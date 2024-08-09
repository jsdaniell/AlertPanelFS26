'use client'
import CustomCheckBox from "@/components/CustomCheckBox/CustomCheckBox";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import PillButton from "@/components/PillButton/PillButton";
import { useRouter } from "next/navigation";

const ITENS_LIST = [
    "Ar-condicionado 1",
    "Ar-condicionado 2",
    "Projetor de Slides",
    "Conexão HDMI do Projetor",
    "Luzes",
    "Conexão de Internet",
    "Tomadas"
]

export default function CheckList() {
    const router = useRouter();

    return (
      <PageWrapper>
        <p className="text-2xl">Check-list</p>
        <div className="flex flex-col text-black bg-white rounded-2xl p-6 gap-2">
          {ITENS_LIST.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4"
            >
              <CustomCheckBox />
              <p>{item}</p>
            </div>
            ))}
        </div>
        <div className="flex flex-col gap-2 min-w-full">
          <p className="text-white">Comentários adicionais</p>
          <textarea
            className="min-w-full border-2 bg-transparent rounded-lg"
            rows={3} 
          />
        </div>
        <PillButton
          text="Enviar" 
          onClick={() => router.push("/success")}
        />
      </PageWrapper>
    )
}