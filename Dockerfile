#
# Build stage
#
FROM gradle:jdk17 AS build
COPY . /app
WORKDIR /app
RUN gradle --no-daemon bootJar

#
# Running state
#
FROM openjdk:17-alpine
COPY --from=build /app/build/libs/*.jar app.jar
EXPOSE 8085
ENTRYPOINT ["java", "-jar", "app.jar"]