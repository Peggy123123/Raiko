<template>
    <div class="container mt-3">
        <div class="banner">
          <h2 class="mt-5 pt-5">我是首頁</h2>
            <!-- <svg width="500" height="350" viewBox="0 0 667 452" fill="none" xmlns="http://www.w3.org/2000/svg" class="shape1">
            <path d="M462 16.0006C192.4 -38.7994 87 68.0025 47.9999 144.5C-117.5 574.999 179 379.502 425.5 444.502C672 509.502 799 84.5006 462 16.0006Z" fill="#85CED7"/></svg>
            <svg width="450" height="318" viewBox="0 0 450 318" fill="none" xmlns="http://www.w3.org/2000/svg" class="shape2">
            <path d="M208.079 0.793961C448.639 6.87008 475.033 112.459 434.239 207.048C393.445 301.637 409.14 309.88 186.167 317.256C-36.805 324.631 -92.6214 -6.80118 208.079 0.793961Z" fill="#85CED7"/>
            </svg>
            <svg width="321" height="309" viewBox="0 0 321 309" fill="none" xmlns="http://www.w3.org/2000/svg" class="shape3">
            <path d="M86.4404 40.9245C222.548 -84.058 380.178 109.158 297.535 211.3C214.891 313.443 113.867 324.303 72.8426 291.571C-45.5404 197.118 -2.86723 122.933 86.4404 40.9245Z" fill="#E0D979"/>
            </svg> -->
            <!-- <svg width="50" height="50" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg" class="shape-circle-1">
            <circle cx="41" cy="41" r="41" fill="#85CED7" fill-opacity="0.5"/>
            </svg>
            <svg width="50" height="50" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg" class="shape-circle-2">
            <circle cx="41" cy="41" r="41" fill="#85CED7" fill-opacity="0.5"/>
            </svg>
            <svg width="50" height="50" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg" class="shape-circle-3">
            <circle cx="41" cy="41" r="41" fill="#85CED7" fill-opacity="0.5"/>
            </svg>
            <svg width="50" height="50" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg" class="shape-circle-4">
            <circle cx="41" cy="41" r="41" fill="#85CED7" fill-opacity="0.5"/>
            </svg> -->
        </div>
    </div>
</template>


<script>
</script>



<style>
.banner {
    height: 600px;
    /* background-color: pink; */
    max-width: 100%;
}

@keyframes shape-1 {
  0% { top:0px ;left: 0;}
  50% { top:20px;left: 0; }
  100% { top:0px;left: 0;}
}

@keyframes shape-2 {
  0% { top:100px ;left: 700px;}
  50% { top:120px;left: 700px; }
  100% { top:100px;left: 700px;}
}

@keyframes shape-3 {
  0% { top:270px ;left: 450px;}
  50% { top:250px;left: 450px; }
  100% { top:270px;left: 450px;}
}

@keyframes shape-circle {
  0% { top:20px }
  50% { top:0px; }
  100% { top:20px}
}

.shape1 {
    position: relative;
    animation-name: shape-1;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite; 
    animation-fill-mode: both; 
    z-index: 20;
}

.shape2 {
    position: relative;
    position: absolute;
    animation-name: shape-2;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite; 
    animation-fill-mode: both; 
    z-index: 30;
}

.shape3 {
    position: relative;
    position: absolute;
    animation-name: shape-3;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite; 
    animation-fill-mode: both; 
    z-index: 40;
}


</style>