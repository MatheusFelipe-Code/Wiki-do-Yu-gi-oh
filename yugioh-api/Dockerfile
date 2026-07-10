# Estágio 1: Fazer o build do projeto (Atualizado para Java 21)
FROM maven:3.9.6-eclipse-temurin-21 AS build
COPY . .
RUN mvn clean package -DskipTests

# Estágio 2: Rodar o projeto (Atualizado para Java 21)
FROM eclipse-temurin:21-jdk-alpine
COPY --from=build /target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
