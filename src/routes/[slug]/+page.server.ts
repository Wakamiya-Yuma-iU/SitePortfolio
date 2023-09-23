import { getDetail } from "../../lib/microcms";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    try {
      return await getDetail(params.slug);
    } catch (error) {
      console.error("Failed to get detail:", error);
      return { status: 500, body: "Internal Server Error" };
    }
  };  

  export const prerender = true;