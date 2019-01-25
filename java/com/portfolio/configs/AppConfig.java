package com.portfolio.configs;

import javax.servlet.ServletContext;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Description;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.script.ScriptTemplateConfigurer;
import org.springframework.web.servlet.view.script.ScriptTemplateViewResolver;
import org.thymeleaf.spring5.SpringTemplateEngine;
import org.thymeleaf.spring5.view.ThymeleafViewResolver;
import org.thymeleaf.templateresolver.ServletContextTemplateResolver;


@Configuration
@EnableWebMvc
@ComponentScan(basePackages="com.portfolio")
public class AppConfig implements WebMvcConfigurer {
	
	public void addResourceHandlers(final ResourceHandlerRegistry registry) {
	    registry.addResourceHandler("/assets/dist/**").addResourceLocations("/WEB-INF");
	}
	
	 @Bean
	 public ViewResolver viewResolver() {
	     return new ScriptTemplateViewResolver("/WEB-INF/public/", ".html");
	 }
	 
	@Bean
	public ScriptTemplateConfigurer scriptTemplateConfigurer() {
	    ScriptTemplateConfigurer configurer = new ScriptTemplateConfigurer();
	    configurer.setEngineName("nashorn");
	    configurer.setScripts(
	            "WEB-INF/static/polyfills.js",
	            "WEB-INF/public/serverbuild.js"
	    );
	    configurer.setRenderFunction("render");
	    configurer.setSharedEngine(false);
	    return configurer;
	}

}
