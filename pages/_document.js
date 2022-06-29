import Document , {HTML,Head,NextScript,Main} from "next/document";

export class MyDocument extends Document {
    render(){
        return(
            <HTML lang="en">
                <Head>
                    <body>
                        <Main>
                            <NextScript/>
                        </Main>
                    </body>
                </Head>
            </HTML>
        )
    }
}
