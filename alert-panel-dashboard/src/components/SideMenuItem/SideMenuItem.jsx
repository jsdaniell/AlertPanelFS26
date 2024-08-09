export default function SideMenuItem({icon, path, title = ""}) {

    const Icon = icon;

    return <div className="cursor-pointer min-w-full p-2 bg-green-700 max-h-10 text-white rounded text-sm flex items-center">
        {icon && <div className="mr-2">
            <Icon size={20} />
        </div>}
        {title}
    </div>
}
