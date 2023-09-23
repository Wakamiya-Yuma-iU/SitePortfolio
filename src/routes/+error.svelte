<script>
    import { goto } from '$app/navigation';
  
    export let message = "ページが存在しません";
  
    function goBack() {
      window.history.back();
    }
  
    function goToHome() {
      goto('/');
    }
  </script>
  
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div class="p-6 bg-white rounded-lg shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
      <h1 class="text-2xl font-semibold text-red-600 mb-2">
        {message}
      </h1>
      <div class="flex space-x-4 mt-4 justify-center">
        <button 
          class="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200" 
          on:click={goBack}>
          前回のページに戻る
        </button>
        <button 
          class="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200"
          on:click={goToHome}>
          メインページに戻る
        </button>
      </div>
    </div>
  </div>
  