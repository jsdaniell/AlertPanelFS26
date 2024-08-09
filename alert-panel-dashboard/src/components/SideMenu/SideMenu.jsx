'use client'
import SideMenuItem from "../SideMenuItem/SideMenuItem";
import { ClipboardText, Pen, Users } from "@phosphor-icons/react/dist/ssr";

export default function SideMenu() {
    return <div className="flex flex-col p-6 border-r border-r-gray-400 gap-3 min-w-60">
        <SideMenuItem title="Dashboard" icon={ClipboardText} />
        <SideMenuItem title="Colaboradores" icon={Users} />
        <SideMenuItem title="Registrar sala" icon={Pen} />
    </div>
}