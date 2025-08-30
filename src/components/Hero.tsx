export function Hero() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="h-120 md:h-[80dvh] flex flex-col bg-[url('https://images.unsplash.com/photo-1595928642581-f50f4f3453a5?q=80&w=855&auto=format&fit=crop&ixlib=rb-4.1.0')] bg-cover bg-center bg-no-repeat rounded-2xl relative before:absolute before:inset-0 before:bg-black/60 before:rounded-2xl overflow-hidden">
        <div className="relative z-10 mt-auto p-5 w-full">
          <div className="w-full flex justify-end">
            <h1 className="text-4xl sm:text-5xl text-white text-right leading-tight max-w-2xl">
              Where coffee meets craftsmanship
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
