# Estágio 1: Fazer o build do projeto (usando Maven e Java 17)
# Se o seu projeto usar o Java 21, mude as duas linhas abaixo para eclipse-temurin:21-jdk-alpine
FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

# Estágio 2: Rodar o projeto
FROM openjdk:17-jdk-slim
COPY --from=build /target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
