 <script>
    export let exp;
</script>
<a href={exp.href} target="_blank" class="p-4 m-8 sm:p-6md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200">
    <div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-14 md:-mt-14 lg:-mt-16 mx-auto duration-200">
        <img src={exp.icon} alt="project_1">
        <!-- <i class={step.icon}/> -->
    </div>  
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">{exp.name}</h3>
    <h6 class="text-base font-semibold">{exp.role}</h6>
    <slot/>
    <div class="flex-1 flex justify-between gap-4 items-center">
        <div class="m-auto cursor-pointer relative overflow-hidden">
            <p class="relative z-4">{exp.duration}</p>
        </div>
    </div>
</a>