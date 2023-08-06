import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { projectId: string, file: string } }
) {
    const { projectId, file } = params;

    const rawFile = file.replace(".toml", "");

    const data = await fetch(
        `https://moddermore.net/list/${projectId}/packwiz/${rawFile}.toml`
    );

    const newRes = new NextResponse(data.body);

    return newRes;
}