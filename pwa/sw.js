self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["./",
            "./index.html",
            "/index.js",
            "/manifest.json",
            "/style.css",
            "/sw.js",
            "/res/GitHub-Mark.png",
            "/res/Rectangle 475.png"]);
        })
    );
});

self.addEventListener("fetch", e =>{
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    )
})