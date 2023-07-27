function SidebarItem({label, Icon}) {
  return (
   <div className="flex flex-row items-center">
    <div className="h-15 w-15 rounded-full flex justify-center items-center p-4 hover:bg-slate-300 hover:bg-opacity-10 lg:hidden cursor-pointer">
        <Icon size={25} color="white" />

    </div>
    <div className="hidden lg:flex items-row gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 items-center">
    <Icon size={25} color="white" />
    <p className="text-white hidden lg:block text-xl">{label}</p>
    </div>

   </div>
  );
}

export default SidebarItem;
