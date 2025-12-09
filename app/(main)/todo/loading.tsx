

export default function TodoSkeleton() {

    return (
        <div>
            <ul className="w-full max-w-4xl mx-auto animate-pulse">

                {/* 5 skeleton rows */}
                {Array.from({ length: 5 }).map((_, i) => (
                    <li
                        key={i}
                        className="flex items-center justify-between p-6 border-b"
                    >
                        {/* Checkbox placeholder */}
                        <div className="flex-shrink-0 mr-6">
                            <div className="h-6 w-6 rounded-md bg-gray-300" />
                        </div>

                        {/* Content text placeholder */}
                        <div className="flex-1">
                            <div className="h-6 w-3/4 bg-gray-300 rounded-md" />
                        </div>

                        {/* CreatedAt placeholder */}
                        <div className="w-56 text-right">
                            <div className="h-6 w-full bg-gray-300 rounded-md" />
                        </div>
                    </li>
                ))}
                {/* Add new item skeleton */}
                <li className="mt-6">
                    <div className="h-10 w-40 bg-gray-300 rounded-md mx-auto" />
                </li>
            </ul>
        </div>
    );
}