import { db } from '@/db';
import { sql } from 'drizzle-orm'
import { todoTable } from '@/db/schema/todo_table';
import CheckBox from './CheckBox';
import RemoveButton from './RemoveButton';
import AddNewItem from './AddNewItem';

export default async function TodoList(
    { userId }: { userId: string }

) {
    const listItems = await db.select().from(todoTable).where(sql`${todoTable.userId} = ${userId}`);

    return (
        <div>
            <ul className="w-full max-w-4xl mx-auto">
                {listItems.map((item) => (
                    <li
                        key={item.id}
                        className={`flex items-center justify-between p-6 border-b ${item.checked ? "line-through opacity-50" : ""
                            }`}
                    >
                        {/* Checkbox */}
                        <div className="flex-shrink-0 mr-6">
                            <CheckBox id={item.id} initialChecked={item.checked} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-xl font-semibold">
                            {item.content}
                        </div>

                        {/* CreatedAt */}
                        <div className="w-56 text-right text-lg font-semibold">
                            {item.createdAt?.toLocaleString() ?? "No date"}
                        </div>

                        {/* Remove button */}
                        <div className="flex-shrink-0 ml-6">
                            <RemoveButton id={item.id} />
                        </div>
                    </li>
                ))}

                {/* Add new item row */}
                <li className="mt-6">
                    <AddNewItem />
                </li>
            </ul>
        </div>
    )


}