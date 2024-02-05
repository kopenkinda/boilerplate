/**
 * Bootstrap repo
 * 1.0
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "oazapfts/lib/runtime";
import * as QS from "oazapfts/lib/runtime/query";
export const defaults: Oazapfts.Defaults<Oazapfts.CustomHeaders> = {
    headers: {},
    baseUrl: "/",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {};
export type ExampleDto = {
    /** The message to be returned */
    message: string;
};
export function appControllerGetHello(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/", {
        ...opts
    });
}
/**
 * Example request with a basic return type
 */
export function appControllerBasicTypeExample({ exampleDto }: {
    exampleDto: ExampleDto;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: string;
    }>("/basic-example", oazapfts.json({
        ...opts,
        method: "POST",
        body: exampleDto
    }));
}
/**
 * Example request with a complex return type
 */
export function appControllerComplexTypeExample({ exampleDto }: {
    exampleDto: ExampleDto;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ExampleDto;
    }>("/complex-example", oazapfts.json({
        ...opts,
        method: "POST",
        body: exampleDto
    }));
}

