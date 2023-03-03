> log관련 오류
- ini 설정파일 에서  
-startup
plugins/org.eclipse.equinox.launcher_1.6.400.v20210924-0641.jar
--launcher.library
plugins/org.eclipse.equinox.launcher.win32.win32.x86_64_1.2.700.v20221108-1024
-product
org.springframework.boot.ide.branding.sts4
--launcher.defaultAction
openFile
-vm
plugins/org.eclipse.justj.openjdk.hotspot.jre.full.win32.x86_64_17.0.5.v20221102-0933/jre/bin
-vmargs
--add-opens=java.base/java.io=ALL-UNNAMED
--add-opens=java.base/sun.nio.ch=ALL-UNNAMED
--add-opens=java.base/java.net=ALL-UNNAMED
--add-opens=java.base/sun.security.ssl=ALL-UNNAMED
-Dosgi.requiredJavaVersion=17
-Dosgi.dataAreaRequiresExplicitInit=true
-Xms256m
-Xmx2048m
--illegal-access=warn
--add-modules=ALL-SYSTEM
-javaagent:C:\spring\sts-4.17.1.RELEASE\lombok.jar
--add-opens=java.base/java.lang=ALL-UNNAMED
를 입력해주고 lombok.jar파일을 javaagent의 경로에 맞게 넣는다.
