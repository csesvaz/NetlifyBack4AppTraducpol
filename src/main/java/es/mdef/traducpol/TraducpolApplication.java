package es.mdef.traducpol;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication

@EntityScan("es.mdef.traducpolPrueba.entidades")
public class TraducpolApplication {
    public static final Logger log = LoggerFactory.getLogger(TraducpolApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(TraducpolApplication.class, args);
    }

}