function skeleton(){
    return (
        <>
        <div className="animate-pulse col-span-4 md:col-span-3 flex flex-col space-y-2">
          <div className="rounded-lg bg-slate-700 h-24 md:h-40 w-full"></div>
          <div className="flex-1 space-y-2 py-1">
            <div className="h-2 w-1/2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
        </>
    )
}
export default skeleton;