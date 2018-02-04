# Copyright (c) 2016 Dustin Doloff
# Licensed under Apache License v2.0

load("@rules_web//html:html.bzl",
    "html_page",
    "minify_html",
)

# load("@rules_web//js:js.bzl",
#     "closure_compile",
# )

load("@rules_web//site_zip:site_zip.bzl",
    "rename_zip_paths",
    "zip_server",
    "zip_site",
)

load("@rules_web//deploy:deploy.bzl",
    "deploy_site_zip_s3_script",
)

html_page(
    name = "commentube_html",
    body = "index.html",
    config = "html_config.json",
    js_files = [
        ":js/dQuery.js",
    ],
    deferred_js_files = [
        ":js/helper.js",
        ":js/main.js",
    ],
    css_files = ["css/main.css",]
)

html_page(
    name = "commentube_help_html",
    body = "help.html",
    config = "html_config.json",
)

minify_html(
    name = "min_commentube",
    src = ":commentube_html",
)

minify_html(
    name = "min_commentube_help",
    src = ":commentube_help_html",
)

zip_site(
    name = "commentube_dustintoff_com",
    root_files = [
        ":min_commentube",
        ":min_commentube_help",
    ],
    out_zip = "commentube_dustintoff_com.zip",
)

rename_zip_paths(
    name = "rename_commentube_dustintoff_com_zip",
    source_zip = ":commentube_dustintoff_com",
    path_map = {
        ":min_commentube": "index.html",
        ":min_commentube_help": "help.html",
    },
)

alias(
    name = "final_zip",
    actual = ":rename_commentube_dustintoff_com_zip",
)

zip_server(
    name = "zip_server",
    zip = ":final_zip",
    port = 8080,
)

deploy_site_zip_s3_script(
    name = "deploy_site",
    bucket = "commentube.dustintoff.com",
    zip_file = ":final_zip",
)
