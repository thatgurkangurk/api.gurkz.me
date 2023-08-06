import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { projectId: string, mod: string } }
) {
    const { projectId, mod } = params;

    const rawFile = mod.replace(".toml", "");

    const data = await fetch(
        `https://moddermore.net/list/${projectId}/packwiz/mods/${rawFile}.toml`
    );

    const newRes = new NextResponse(data.body);

    return newRes;
}