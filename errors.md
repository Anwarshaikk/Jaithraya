 ✓ Starting...
<w> [webpack.cache.PackFileCacheStrategy] Restoring pack from C:\Users\shaik\Jaithraya\.next\cache\webpack\client-development.pack.gz failed: TypeError: Cannot read properties of undefined (reading 'hasStartTime')
 ✓ Ready in 5.1s
 ○ Compiling /admin/consultations ...
 ✓ Compiled /admin/consultations in 25.9s (1584 modules)
 GET /admin/consultations 200 in 28620ms
 ✓ Compiled in 2.7s (704 modules)
 ○ Compiling /api/consultation ...
 ✓ Compiled /api/consultation in 3.9s (1019 modules)
Error fetching consultation submissions: FirebaseAppError: The default Firebase app does not exist. Make sure you call initializeApp() before using any of the Firebase services.
    at AppStore.getApp (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\lifecycle.js:79:19)
    at FirebaseNamespaceInternals.app (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\firebase-namespace.js:54:35)
    at FirebaseNamespace.app (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\firebase-namespace.js:256:30)
    at FirebaseNamespace.ensureApp (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\firebase-namespace.js:266:24)
    at FirebaseNamespace.fn (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\firebase-namespace.js:92:25)
    at GET (webpack-internal:///(rsc)/./src/app/api/consultation/route.ts:80:69)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:55044
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\trace\tracer.js:140:36
    at NoopContextManager.with (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\context\NoopContextManager.js:25:19)
    at ContextAPI.with (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\api\context.js:60:46)
    at NoopTracer.startActiveSpan (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\trace\NoopTracer.js:65:31)
    at ProxyTracer.startActiveSpan (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\trace\ProxyTracer.js:36:24)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\trace\tracer.js:122:103
    at NoopContextManager.with (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\context\NoopContextManager.js:25:19)
    at ContextAPI.with (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\api\context.js:60:46)
    at NextTracerImpl.trace (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\trace\tracer.js:122:28)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:47853
    at AsyncLocalStorage.run (node:internal/async_local_storage/async_hooks:91:14)
    at Object.wrap (C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:40244)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:46429
    at AsyncLocalStorage.run (node:internal/async_local_storage/async_hooks:91:14)
    at Object.wrap (C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:37583)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:46391
    at AsyncLocalStorage.run (node:internal/async_local_storage/async_hooks:91:14)
    at ek.execute (C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:45838)
    at ek.handle (C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:56303)
    at doRender (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1377:60)
    at cacheEntry.responseCache.get.routeKind (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1599:34)
    at ResponseCache.get (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\response-cache\index.js:49:26)
    at DevServer.renderToResponseWithComponentsImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1507:53)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1002:121
    at NextTracerImpl.trace (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\trace\tracer.js:105:20)
    at DevServer.renderToResponseWithComponents (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1002:41)
    at DevServer.renderPageComponent (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1931:35)
    at async DevServer.renderToResponseImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1969:32)
    at async DevServer.pipeImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:920:25)
    at async NextNodeServer.handleCatchallRenderRequest (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\next-server.js:272:17)
    at async DevServer.handleRequestImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:816:17)
    at async C:\Users\shaik\Jaithraya\node_modules\next\dist\server\dev\next-dev-server.js:339:20
    at async Span.traceAsyncFn (C:\Users\shaik\Jaithraya\node_modules\next\dist\trace\trace.js:154:20)
    at async DevServer.handleRequest (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\dev\next-dev-server.js:336:24)
    at async invokeRender (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\router-server.js:174:21)
    at async handleRequest (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\router-server.js:353:24)
    at async requestHandlerImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\router-server.js:377:13)
    at async Server.requestListener (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\start-server.js:141:13) {
  errorInfo: {
    code: 'app/no-app',
    message: 'The default Firebase app does not exist. Make sure you call initializeApp() before using any of the Firebase services.'
  },
  codePrefix: 'app'
}
 GET /api/consultation 500 in 7104ms
Error fetching consultation submissions: FirebaseAppError: The default Firebase app does not exist. Make sure you call initializeApp() before using any of the Firebase services.
    at AppStore.getApp (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\lifecycle.js:79:19)
    at FirebaseNamespaceInternals.app (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\firebase-namespace.js:54:35)
    at FirebaseNamespace.app (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\firebase-namespace.js:256:30)
    at FirebaseNamespace.ensureApp (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\firebase-namespace.js:266:24)
    at FirebaseNamespace.fn (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\firebase-namespace.js:92:25)
    at GET (webpack-internal:///(rsc)/./src/app/api/consultation/route.ts:80:69)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:55044
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\trace\tracer.js:140:36
    at NoopContextManager.with (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\context\NoopContextManager.js:25:19)
    at ContextAPI.with (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\api\context.js:60:46)
    at NoopTracer.startActiveSpan (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\trace\NoopTracer.js:65:31)
    at ProxyTracer.startActiveSpan (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\trace\ProxyTracer.js:36:24)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\trace\tracer.js:122:103
    at NoopContextManager.with (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\context\NoopContextManager.js:25:19)
    at ContextAPI.with (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\api\context.js:60:46)
    at NextTracerImpl.trace (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\trace\tracer.js:122:28)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:47853
    at AsyncLocalStorage.run (node:internal/async_local_storage/async_hooks:91:14)
    at Object.wrap (C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:40244)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:46429
    at AsyncLocalStorage.run (node:internal/async_local_storage/async_hooks:91:14)
    at Object.wrap (C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:37583)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:46391
    at AsyncLocalStorage.run (node:internal/async_local_storage/async_hooks:91:14)
    at ek.execute (C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:45838)
    at ek.handle (C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:56303)
    at doRender (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1377:60)
    at cacheEntry.responseCache.get.routeKind (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1599:34)
    at ResponseCache.get (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\response-cache\index.js:49:26)
    at DevServer.renderToResponseWithComponentsImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1507:53)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1002:121
    at NextTracerImpl.trace (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\trace\tracer.js:105:20)
    at DevServer.renderToResponseWithComponents (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1002:41)
    at DevServer.renderPageComponent (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1931:35)
    at async DevServer.renderToResponseImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1969:32)
    at async DevServer.pipeImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:920:25)
    at async NextNodeServer.handleCatchallRenderRequest (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\next-server.js:272:17)
    at async DevServer.handleRequestImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:816:17)
    at async C:\Users\shaik\Jaithraya\node_modules\next\dist\server\dev\next-dev-server.js:339:20
    at async Span.traceAsyncFn (C:\Users\shaik\Jaithraya\node_modules\next\dist\trace\trace.js:154:20)
    at async DevServer.handleRequest (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\dev\next-dev-server.js:336:24)
    at async invokeRender (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\router-server.js:174:21)
    at async handleRequest (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\router-server.js:353:24)
    at async requestHandlerImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\router-server.js:377:13)
    at async Server.requestListener (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\start-server.js:141:13) {
  errorInfo: {
    code: 'app/no-app',
    message: 'The default Firebase app does not exist. Make sure you call initializeApp() before using any of the Firebase services.'
  },
  codePrefix: 'app'
}
 GET /api/consultation 500 in 35ms
 ○ Compiling /admin/login ...
 ✓ Compiled /admin/login in 1537ms (1715 modules)
 GET /admin/login 200 in 814ms
Error fetching consultation submissions: FirebaseAppError: The default Firebase app does not exist. Make sure you call initializeApp() before using any of the Firebase services.
    at AppStore.getApp (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\lifecycle.js:79:19)
    at FirebaseNamespaceInternals.app (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\firebase-namespace.js:54:35)
    at FirebaseNamespace.app (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\firebase-namespace.js:256:30)
    at FirebaseNamespace.ensureApp (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\firebase-namespace.js:266:24)
    at FirebaseNamespace.fn (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\firebase-namespace.js:92:25)
    at GET (webpack-internal:///(rsc)/./src/app/api/consultation/route.ts:80:69)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:55044
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\trace\tracer.js:140:36
    at NoopContextManager.with (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\context\NoopContextManager.js:25:19)
    at ContextAPI.with (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\api\context.js:60:46)
    at NoopTracer.startActiveSpan (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\trace\NoopTracer.js:65:31)
    at ProxyTracer.startActiveSpan (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\trace\ProxyTracer.js:36:24)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\trace\tracer.js:122:103
    at NoopContextManager.with (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\context\NoopContextManager.js:25:19)
    at ContextAPI.with (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\api\context.js:60:46)
    at NextTracerImpl.trace (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\trace\tracer.js:122:28)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:47853
    at AsyncLocalStorage.run (node:internal/async_local_storage/async_hooks:91:14)
    at Object.wrap (C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:40244)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:46429
    at AsyncLocalStorage.run (node:internal/async_local_storage/async_hooks:91:14)
    at Object.wrap (C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:37583)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:46391
    at AsyncLocalStorage.run (node:internal/async_local_storage/async_hooks:91:14)
    at ek.execute (C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:45838)
    at ek.handle (C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:56303)
    at doRender (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1377:60)
    at cacheEntry.responseCache.get.routeKind (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1599:34)
    at ResponseCache.get (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\response-cache\index.js:49:26)
    at DevServer.renderToResponseWithComponentsImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1507:53)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1002:121
    at NextTracerImpl.trace (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\trace\tracer.js:105:20)
    at DevServer.renderToResponseWithComponents (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1002:41)
    at DevServer.renderPageComponent (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1931:35)
    at async DevServer.renderToResponseImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1969:32)
    at async DevServer.pipeImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:920:25)
    at async NextNodeServer.handleCatchallRenderRequest (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\next-server.js:272:17)
    at async DevServer.handleRequestImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:816:17)
    at async C:\Users\shaik\Jaithraya\node_modules\next\dist\server\dev\next-dev-server.js:339:20
    at async Span.traceAsyncFn (C:\Users\shaik\Jaithraya\node_modules\next\dist\trace\trace.js:154:20)
    at async DevServer.handleRequest (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\dev\next-dev-server.js:336:24)
    at async invokeRender (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\router-server.js:174:21)
    at async handleRequest (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\router-server.js:353:24)
    at async requestHandlerImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\router-server.js:377:13)
    at async Server.requestListener (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\start-server.js:141:13) {
  errorInfo: {
    code: 'app/no-app',
    message: 'The default Firebase app does not exist. Make sure you call initializeApp() before using any of the Firebase services.'
  },
  codePrefix: 'app'
}
 GET /api/consultation 500 in 262ms
Error fetching consultation submissions: FirebaseAppError: The default Firebase app does not exist. Make sure you call initializeApp() before using any of the Firebase services.
    at AppStore.getApp (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\lifecycle.js:79:19)
    at FirebaseNamespaceInternals.app (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\firebase-namespace.js:54:35)
    at FirebaseNamespace.app (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\firebase-namespace.js:256:30)
    at FirebaseNamespace.ensureApp (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\firebase-namespace.js:266:24)
    at FirebaseNamespace.fn (C:\Users\shaik\Jaithraya\node_modules\firebase-admin\lib\app\firebase-namespace.js:92:25)
    at GET (webpack-internal:///(rsc)/./src/app/api/consultation/route.ts:80:69)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:55044
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\trace\tracer.js:140:36
    at NoopContextManager.with (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\context\NoopContextManager.js:25:19)
    at ContextAPI.with (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\api\context.js:60:46)
    at NoopTracer.startActiveSpan (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\trace\NoopTracer.js:65:31)
    at ProxyTracer.startActiveSpan (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\trace\ProxyTracer.js:36:24)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\trace\tracer.js:122:103
    at NoopContextManager.with (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\context\NoopContextManager.js:25:19)
    at ContextAPI.with (C:\Users\shaik\Jaithraya\node_modules\@opentelemetry\api\build\src\api\context.js:60:46)
    at NextTracerImpl.trace (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\trace\tracer.js:122:28)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:47853
    at AsyncLocalStorage.run (node:internal/async_local_storage/async_hooks:91:14)
    at Object.wrap (C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:40244)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:46429
    at AsyncLocalStorage.run (node:internal/async_local_storage/async_hooks:91:14)
    at Object.wrap (C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:37583)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:46391
    at AsyncLocalStorage.run (node:internal/async_local_storage/async_hooks:91:14)
    at ek.execute (C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:45838)
    at ek.handle (C:\Users\shaik\Jaithraya\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:56303)
    at doRender (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1377:60)
    at cacheEntry.responseCache.get.routeKind (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1599:34)
    at ResponseCache.get (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\response-cache\index.js:49:26)
    at DevServer.renderToResponseWithComponentsImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1507:53)
    at C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1002:121
    at NextTracerImpl.trace (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\trace\tracer.js:105:20)
    at DevServer.renderToResponseWithComponents (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1002:41)
    at DevServer.renderPageComponent (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1931:35)
    at async DevServer.renderToResponseImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:1969:32)
    at async DevServer.pipeImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:920:25)
    at async NextNodeServer.handleCatchallRenderRequest (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\next-server.js:272:17)
    at async DevServer.handleRequestImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\base-server.js:816:17)
    at async C:\Users\shaik\Jaithraya\node_modules\next\dist\server\dev\next-dev-server.js:339:20
    at async Span.traceAsyncFn (C:\Users\shaik\Jaithraya\node_modules\next\dist\trace\trace.js:154:20)
    at async DevServer.handleRequest (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\dev\next-dev-server.js:336:24)
    at async invokeRender (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\router-server.js:174:21)
    at async handleRequest (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\router-server.js:353:24)
    at async requestHandlerImpl (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\router-server.js:377:13)
    at async Server.requestListener (C:\Users\shaik\Jaithraya\node_modules\next\dist\server\lib\start-server.js:141:13) {
  errorInfo: {
    code: 'app/no-app',
    message: 'The default Firebase app does not exist. Make sure you call initializeApp() before using any of the Firebase services.'
  },
  codePrefix: 'app'
}
 GET /api/consultation 500 in 30ms
