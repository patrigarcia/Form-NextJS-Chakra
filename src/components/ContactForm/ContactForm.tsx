"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Flex, FormControl, Input, Switch, Button, Text, Icon, Card, Box, FormLabel } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FormData } from "./typesForm";

const ContactForm = () => {
    const initialState: FormData = {
        name: "",
        email: "",
        linkedin: "",
        github: "",
        rememberMe: true,
    };

    const [formData, setFormData] = useState<FormData>(initialState);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(formData);
        setFormData(initialState);
    };

    return (
        <Flex align="center" justify="center" h="100vh" color="black" fontSize="0.9em">
            <Card bg="white" p={10} borderRadius="xl" w="400px" align="center" h="520" boxShadow="2xl">
                <Text fontSize="md" as="b" textAlign="center" mb="10%">
                    Información del usuario
                </Text>
                <Box as="form" w="90%" onSubmit={handleSubmit}>
                    <FormControl my={2}>
                        <FormLabel fontSize="small">Nombre</FormLabel>
                        <Input name="name" placeholder="Tu nombre" fontSize="0.9em" value={formData.name} onChange={handleChange} />
                    </FormControl>
                    <FormControl my={4}>
                        <FormLabel fontSize="small">Email</FormLabel>
                        <Input type="email" name="email" placeholder="Tu email" fontSize="0.9em" value={formData.email} onChange={handleChange} />
                    </FormControl>

                    <FormControl my={8} display="flex" alignItems="center">
                        <Icon as={FaGithub} mr="3%" fontSize="2xl" />
                        <Input name="github" placeholder="Tu perfil de GitHub" fontSize="0.9em" value={formData.github} onChange={handleChange} />
                    </FormControl>
                    <FormControl my={7} display="flex" alignItems="center">
                        <Switch id="rememberMe" name="rememberMe" isChecked={formData.rememberMe} onChange={handleChange} colorScheme="teal" size="sm" />
                        <FormLabel htmlFor="rememberMe" mb="0" fontSize="small" ml={2}>
                            Recuérdame
                        </FormLabel>
                    </FormControl>
                    <Button type="submit" bg="teal.300" w="100%" fontSize="0.9em" color="white" my={3}>
                        ENVIAR
                    </Button>
                </Box>
            </Card>
        </Flex>
    );
};

export default ContactForm;
