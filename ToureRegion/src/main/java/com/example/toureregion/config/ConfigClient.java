package com.example.toureregion.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("global.params")
public record ConfigClient(int a, int b) {
}
