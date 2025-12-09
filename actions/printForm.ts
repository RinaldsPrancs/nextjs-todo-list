"use server"

export default async function addConsole(
    prevState: { error?: string; success: boolean },
    formData: FormData
) {
    console.log("Form submitted!");
    console.log("name:", formData.get("name"));
    console.log("password:", formData.get("password"));

    await new Promise((resolve) => setTimeout(resolve, 500));

    return { success: true, error: undefined };
}