import { useAppSelector } from "../hooks/redux";

const FavoritesPage = () => {
   const { favorites } = useAppSelector((state) => state.github);

   if (favorites.length === 0) return <p className="text-center">No items</p>;

   return (
      <div className="flex justify-center pt-10 mx-auto min-h-full w-screen">
         <ul className="list-none">
            {favorites.map((f) => (
               <li key={f}>
                  <a target="_blank" href={f}>
                     {f}
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default FavoritesPage;
