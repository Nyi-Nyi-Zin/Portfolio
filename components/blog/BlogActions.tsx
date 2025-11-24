"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Trash2, Edit2 } from "lucide-react";

interface BlogActionsProps {
  postId: string;
}

export default function BlogActions({ postId }: BlogActionsProps) {
  const handleDelete = async () => {
    if (!confirm("Delete this blog?")) return;
    try {
      await fetch(`/api/blogs/${postId}`, { method: "DELETE" });
      alert("Deleted! Redirecting...");
      window.location.href = "/blogs";
    } catch (error) {
      alert("Error deleting blog");
      console.error(error);
    }
  };

  return (
    <div className="flex gap-4 mt-6">
      <Button variant="destructive" onClick={handleDelete}>
        <Trash2 className="mr-2 h-4 w-4" /> Delete
      </Button>

      <Link href={`/blogs/edit/${postId}`}>
        <Button variant="outline">
          <Edit2 className="mr-2 h-4 w-4" /> Edit
        </Button>
      </Link>
    </div>
  );
}
