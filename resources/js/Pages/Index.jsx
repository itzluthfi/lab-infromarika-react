import React from "react";
import { Head, Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
export default function Index({ posts }) {
    function deletePost(id) {
        router.delete(`/post/${id}`);
    }

    return (
        <>
            <Head title="Posts" />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4 text-green-500">
                    Test Post
                </h1>
                <hr className="mb-4" />
                {posts &&
                    posts.map((item) => (
                        <div key={item.id} className="mb-4 p-4 border rounded">
                            <h2 className="text-xl font-bold">{item.title}</h2>
                            <p className="my-2">{item.body}</p>
                            <div className="flex gap-2">
                                <Link
                                    href={`/post/${item.id}/edit`}
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Edit
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => deletePost(item.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}
