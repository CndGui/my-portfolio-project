import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    backgroundImage: "url(/images/background-opengraph.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                    width: "1200px",
                    height: "630px",
                    display: "flex"
                }}
            >
                <div
                    style={{
                        backgroundColor: "#04151c",
                        width: "100%",
                        height: "min-content",
                        padding: "20px 40px",
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px",
                        marginTop: "auto",
                        display: "flex",
                        gap: "20px"
                    }}
                >
                    <img src="/images/perfil.png" alt="Perfil" style={{
                        height: "100px",
                        borderRadius: "12px"
                    }} />

                    <div>
                        <p
                            style={{
                                fontSize: "24px"
                            }}
                        >Guilherme Rodrigues</p>
                        <p
                            style={{
                                color: "#bdbdbd"
                            }}
                        >FullStack Developer</p>
                    </div>
                </div>
            </div>
        ),

        {
            ...size
        }
    )
}