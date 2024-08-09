export default function PageWrapper({children}){
    return (
      <main className="flex min-h-screen h-screen flex-col items-center justify-center p-12 bg-emerald-600">
        <div className="flex flex-col items-center w-72 min-w-72 text-white justify-center gap-10">
          {children}
        </div>
      </main>
    )
}