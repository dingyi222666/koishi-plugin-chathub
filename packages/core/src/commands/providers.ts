import { Context } from 'koishi';
import { Config } from '../config';
import { ChatChain } from '../chain';

export function apply(ctx: Context, config: Config, chain: ChatChain) {
    ctx.command("chathub.listembeddings", "列出所有目前支持的嵌入模型")
        .alias("嵌入模型列表")
        .action(async ({ session }) => {
            await chain.receiveCommand(
                session, "list_embeddings"
            )
        })

    ctx.command("chathub.listvectorStore", "列出所有目前支持的向量数据库")
        .alias("向量数据库列表")
        .action(async ({ session }) => {
            await chain.receiveCommand(
                session, "list_vectorStore"
            )
        })

    ctx.command("chathub.setembeddings <embeddings:string>", "设置默认使用的嵌入模型")
        .alias("设置嵌入模型")
        .action(async ({ session }, embeddings) => {
            await chain.receiveCommand(
                session, "set_embeddings", {
                setEmbeddings: embeddings
            }
            )
        })


    ctx.command("chathub.setvectorstore <vectorStore:string>", "设置默认使用的向量数据库")
        .alias("设置向量数据库")
        .action(async ({ session }, vectorStore) => {
            await chain.receiveCommand(
                session, "set_vector_store", {
                setVectorStore: vectorStore
            }
            )
        })

}