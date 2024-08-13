import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length <= 3){
      return toast.error("search input should be greater than 3!")
    }

    const conversation= conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation)
      setSearch("")
    }else{
      toast.error("User not found!")
    }
  }

  return (
    <div>
      <form className="flex center gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
