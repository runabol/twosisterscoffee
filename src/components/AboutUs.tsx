export function AboutUs() {
  return (
    <div id="about-us" className="py-10 bg-amber-100 sm:rounded-2xl">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="font-medium pb-6 text-black text-3xl sm:text-4xl dark:text-white border-b-1 border-amber-600/15">
          About us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
          <div className="relative h-80 md:h-150 bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <img
              className="absolute inset-0 size-full object-cover rounded-2xl"
              src="https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?q=80&w=768&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Coffee brewing process"
            />
          </div>

          <div className="pt-10 md:p-10">
            <blockquote className="max-w-4xl mx-auto">
              <p className="mb-6 text-xl sm:text-2xl lg:text-3xl">
                A family tradition of rich, aromatic coffee
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl lg:leading-normal text-gray-800 dark:text-neutral-200">
                Coffee has the power to connect generations – whether it&apos;s
                learning grandma&apos;s brewing techniques and trying to perfect
                them just like her or the intense memories triggered by the rich
                flavors and aromas of our favorite coffee blends.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
