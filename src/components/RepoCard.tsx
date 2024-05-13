import React, { useState } from "react";
import { IRepo } from "../models/models";
import { Link } from "react-router-dom";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

const RepoCard = ({ repo }: { repo: IRepo }) => {
   const { addFavorite, removeFavorite } = useActions();
   const { favorites } = useAppSelector((state) => state.github);

   const [isFav, setIsFav] = useState(favorites.includes(repo.html_url));
   const addToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      addFavorite(repo.html_url);
      setIsFav(true);
   };
   const removeFromFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      removeFavorite(repo.html_url);
      setIsFav(false);
   };

   return (
      <div className="cursor-pointer border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
         <Link to={repo.html_url} target="_blank">
            <h2 className="text-lg font-bold">
               {repo.full_name}
               <p className="text-sm">
                  Fork: <span className="font-bold">{repo.html_url}</span>
                  <br />
                  Description:
                  <span className="font-bold">{repo.description}</span>
               </p>
               <p className="text-sm font-thin">{repo?.id}</p>
            </h2>

            {!isFav && (
               <button
                  className="py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all"
                  onClick={addToFavorite}
               >
                  add
               </button>
            )}

            {isFav && (
               <button
                  className="py-2 px-4 bg-red-500 rounded hover:shadow-md transition-all"
                  onClick={removeFromFavorite}
               >
                  remove
               </button>
            )}
         </Link>
      </div>
   );
};

export default RepoCard;
